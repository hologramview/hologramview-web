-- Create a table for blog posts
CREATE TABLE blog_posts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    content TEXT NOT NULL,
    excerpt TEXT,
    published_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    author_id UUID REFERENCES auth.users(id),
    status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived'))
);

-- Create a table for downloads
CREATE TABLE downloads (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    version TEXT NOT NULL,
    file_url TEXT NOT NULL,
    platform TEXT NOT NULL,
    download_count INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create a table for support tickets
CREATE TABLE support_tickets (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    subject TEXT NOT NULL,
    description TEXT NOT NULL,
    status TEXT DEFAULT 'open' CHECK (status IN ('open', 'in_progress', 'resolved', 'closed')),
    priority TEXT DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high', 'urgent')),
    user_id UUID REFERENCES auth.users(id),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create a table for support ticket responses
CREATE TABLE ticket_responses (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    ticket_id UUID REFERENCES support_tickets(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    user_id UUID REFERENCES auth.users(id),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX blog_posts_slug_idx ON blog_posts(slug);
CREATE INDEX blog_posts_published_at_idx ON blog_posts(published_at);
CREATE INDEX support_tickets_user_id_idx ON support_tickets(user_id);
CREATE INDEX support_tickets_status_idx ON support_tickets(status);
CREATE INDEX ticket_responses_ticket_id_idx ON ticket_responses(ticket_id);

-- Enable Row Level Security (RLS)
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE downloads ENABLE ROW LEVEL SECURITY;
ALTER TABLE support_tickets ENABLE ROW LEVEL SECURITY;
ALTER TABLE ticket_responses ENABLE ROW LEVEL SECURITY;

-- Create policies for blog posts
CREATE POLICY "Public blog posts are viewable by everyone" 
    ON blog_posts FOR SELECT 
    USING (status = 'published');

CREATE POLICY "Users can insert their own blog posts" 
    ON blog_posts FOR INSERT 
    WITH CHECK (auth.uid() = author_id);

CREATE POLICY "Users can update their own blog posts" 
    ON blog_posts FOR UPDATE 
    USING (auth.uid() = author_id);

-- Create policies for downloads
CREATE POLICY "Downloads are viewable by everyone" 
    ON downloads FOR SELECT 
    USING (true);

-- Create policies for support tickets
CREATE POLICY "Users can view their own tickets" 
    ON support_tickets FOR SELECT 
    USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own tickets" 
    ON support_tickets FOR INSERT 
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own tickets" 
    ON support_tickets FOR UPDATE 
    USING (auth.uid() = user_id);

-- Create policies for ticket responses
CREATE POLICY "Users can view responses to their tickets" 
    ON ticket_responses FOR SELECT 
    USING (
        EXISTS (
            SELECT 1 FROM support_tickets 
            WHERE id = ticket_responses.ticket_id 
            AND user_id = auth.uid()
        )
    );

CREATE POLICY "Users can create responses to their tickets" 
    ON ticket_responses FOR INSERT 
    WITH CHECK (
        EXISTS (
            SELECT 1 FROM support_tickets 
            WHERE id = ticket_responses.ticket_id 
            AND user_id = auth.uid()
        )
    );
