CREATE TABLE `android_interest` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`contact` text NOT NULL,
	`locale` text DEFAULT 'ar' NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
