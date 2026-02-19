DROP TABLE IF EXISTS msglog;

-- Create table
CREATE TABLE msglog (
    sender VARCHAR(32) NOT NULL,
    message VARCHAR(255) NOT NULL,
    timestamp BIGINT NOT NULL
);

-- Insert fake data
-- INSERT INTO msglog (sender, message)
-- VALUES
--     ('alice', 'Hello there!'),
--     ('bob', 'How are you today?'),
--     ('charlie', 'This is a test message.'),
--     ('david', 'PostgreSQL is powerful.'),
--     ('eve', 'Just some random fake data.');
