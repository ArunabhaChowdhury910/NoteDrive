import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://vvfiyepqwqtsimcvwfxp.supabase.co'
export const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ2Zml5ZXBxd3F0c2ltY3Z3ZnhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQzNTE4MDEsImV4cCI6MjAwOTkyNzgwMX0.DAdoUq-pHfKavCDjNPvUxJhq0ik1ZyDH0rWEdxqLJIc'

// export const supabase = createClient('https://pzylczakicuqhqlpwnvs.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6eWxjemFraWN1cWhxbHB3bnZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM5MTk3ODksImV4cCI6MjAwOTQ5NTc4OX0.tjMfim5zcfB_NZ0oqeo9xQq2CNqGy7ch11R0wbFQTHM')

export const supabase = createClient(supabaseUrl, supabaseKey)