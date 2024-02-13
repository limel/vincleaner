import { DiscussionEmbed } from "disqus-react";
export default function Disqus() {
  return (
    <div className="container">
      <DiscussionEmbed
        shortname="example"
        config={{
          url: "http://localhost:3000/en",
          identifier: "http://localhost:3000/en",
          title: "Example",
        }}
      />
    </div>
  );
}
