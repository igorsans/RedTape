import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://tvfssmurjtgkipgawsga.supabase.co";
const PROJECT_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2ZnNzbXVyanRna2lwZ2F3c2dhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyMDI2NTcsImV4cCI6MTk4Mzc3ODY1N30.lfdO_kIVy1UDHg1EdDeaPtwUzYDNLvGqYx9TErPwiTA";
export const supabase = createClient(PROJECT_URL, PROJECT_KEY);

export const videoService = () => {
  return {
    getAllVideos() {
      return supabase
        .from("video")
        .select("*")
    },
  };
};
