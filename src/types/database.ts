export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  published_at?: Date;
  created_at: Date;
  updated_at: Date;
  author_id: string;
  status: 'draft' | 'published' | 'archived';
};

export type Download = {
  id: string;
  name: string;
  description?: string;
  version: string;
  file_url: string;
  platform: string;
  download_count: number;
  created_at: Date;
  updated_at: Date;
};

export type SupportTicket = {
  id: string;
  subject: string;
  description: string;
  status: 'open' | 'in_progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  user_id: string;
  created_at: Date;
  updated_at: Date;
};

export type TicketResponse = {
  id: string;
  ticket_id: string;
  content: string;
  user_id: string;
  created_at: Date;
};
