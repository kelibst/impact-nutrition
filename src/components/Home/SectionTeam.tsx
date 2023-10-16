import { TeamMember } from "./TeamMember";

const teamMembersDetails = [
  {
    name: "Eric Baah",
    position: "Internal Relations Director",
    imageLink: "eric_baah.png",
    facebookLink: "facebook.com",
    twitterLink: "twitter.com",
    instagramLink: "instagram.com",
  },
  {
    name: "Jessica Naa Ayele Doe",
    position: "Finance Director",
    imageLink: "jessica_doe.png",
    facebookLink: "facebook.com",
    twitterLink: "twitter.com",
    instagramLink: "instagram.com",
  },
  {
    name: "Raphael Odame",
    position: "Monitoring & Evaluation Director",
    imageLink: "raphael_odame.png",
    facebookLink: "facebook.com",
    twitterLink: "twitter.com",
    instagramLink: "instagram.com",
  },
  {
    name: "Raphael Angmortey",
    position: "Administrative Director",
    imageLink: "raphael_angmortey.png",
    facebookLink: "facebook.com",
    twitterLink: "twitter.com",
    instagramLink: "instagram.com",
  },
];

const SectionTeam = () => {
  return (
    <section className="flex flex-col w-full items-center max-w-screen-xl mx-auto px-8 ">
      <h2 className="text-4xl sm:text-6xl font-medium text-center">
        Meet Our Team
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {teamMembersDetails.map((member) => (
          <TeamMember member={member} />
        ))}
      </div>
    </section>
  );
};

export default SectionTeam;