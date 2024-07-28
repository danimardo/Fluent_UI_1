export  interface RedditPost {
  approved_at_utc: null | number;
  subreddit: string;
  selftext: string;
  author_fullname: string;
  saved: boolean;
  mod_reason_title: null | string;
  gilded: number;
  clicked: boolean;
  title: string;
  link_flair_richtext: any[];
  subreddit_name_prefixed: string;
  hidden: boolean;
  pwls: null | number;
  link_flair_css_class: null | string;
  downs: number;
  thumbnail_height: number;
  top_awarded_type: null | string;
  hide_score: boolean;
  name: string;
  quarantine: boolean;
  link_flair_text_color: string;
  upvote_ratio: number;
  author_flair_background_color: null | string;
  subreddit_type: string;
  ups: number;
  total_awards_received: number;
  media_embed: any;
  thumbnail_width: number;
  author_flair_template_id: null | string;
  is_original_content: boolean;
  user_reports: any[];
  secure_media: null | any;
  is_reddit_media_domain: boolean;
  is_meta: boolean;
  category: null | string;
  secure_media_embed: any;
  link_flair_text: null | string;
  can_mod_post: boolean;
  score: number;
  approved_by: null | string;
  is_created_from_ads_ui: boolean;
  author_premium: boolean;
  thumbnail: string;
  edited: boolean | number;
  author_flair_css_class: null | string;
  author_flair_richtext: any[];
  gildings: any;
  post_hint: string;
  content_categories: null | string;
  is_self: boolean;
  mod_note: null | string;
  created: number;
  link_flair_type: string;
  wls: null | number;
  removed_by_category: null | string;
  banned_by: null | string;
  author_flair_type: string;
  domain: string;
  allow_live_comments: boolean;
  selftext_html: null | string;
  likes: null | boolean;
  suggested_sort: null | string;
  banned_at_utc: null | number;
  url_overridden_by_dest: string;
  view_count: null | number;
  archived: boolean;
  no_follow: boolean;
  is_crosspostable: boolean;
  pinned: boolean;
  over_18: boolean;
  preview: Preview;
  all_awardings: any[];
  awarders: any[];
  media_only: boolean;
  can_gild: boolean;
  spoiler: boolean;
  locked: boolean;
  author_flair_text: null | string;
  treatment_tags: any[];
  visited: boolean;
  removed_by: null | string;
  num_reports: null | number;
  distinguished: null | string;
  subreddit_id: string;
  author_is_blocked: boolean;
  mod_reason_by: null | string;
  removal_reason: null | string;
  link_flair_background_color: string;
  id: string;
  is_robot_indexable: boolean;
  report_reasons: null | string;
  author: string;
  discussion_type: null | string;
  num_comments: number;
  send_replies: boolean;
  whitelist_status: null | string;
  contest_mode: boolean;
  mod_reports: any[];
  author_patreon_flair: boolean;
  author_flair_text_color: null | string;
  permalink: string;
  parent_whitelist_status: null | string;
  stickied: boolean;
  url: string;
  subreddit_subscribers: number;
  created_utc: number;
  num_crossposts: number;
  media: null | any;
  is_video: boolean;
}

export  interface Preview {
  images: Image[];
  reddit_video_preview?: RedditVideoPreview;
  enabled: boolean;
}

export interface Image {
  source: ImageSource;
  resolutions: ImageResolution[];
  variants: any;
  id: string;
}

export  interface ImageSource {
  url: string;
  width: number;
  height: number;
}

export  interface ImageResolution {
  url: string;
  width: number;
  height: number;
}

export  interface RedditVideoPreview {
  bitrate_kbps: number;
  fallback_url: string;
  height: number;
  width: number;
  scrubber_media_url: string;
  dash_url: string;
  duration: number;
  hls_url: string;
  is_gif: boolean;
  transcoding_status: string;
}

export interface RedditResponse {
  kind: string;
  data: {
    after: string;
    dist: number;
    modhash: string;
    geo_filter: string;
    children: { kind: string; data: RedditPost }[];
  };
}
