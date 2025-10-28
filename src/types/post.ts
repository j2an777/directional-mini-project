interface UploadPost {
  title: string;
  body: string;
  category: 'NOTICE' | 'QNA' | 'FREE';
  tags?: string[];
}
