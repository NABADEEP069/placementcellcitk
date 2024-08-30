import HeroComp from "@/components/common/herocomp";
import AboutSection from "@/components/home/about";
import CardOne from "@/components/home/cardone";
import ImageCarousel from "@/components/home/recentcompany";

export default function Tpo() {
  return (
    <main style={{ padding: "5%", margin: "0 auto", maxWidth: "1200px" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1 style={{ fontWeight: "bold", fontSize: "2rem", textAlign: "center" }}>
          FROM TPO'S DESK
        </h1>
      </div>
      <div style={{ margin: "2%" }}>
        <p style={{ textAlign: "justify", fontSize: "1rem", lineHeight: "1.6" }}>
          Welcome to CIT Kokrajhar, your premier destination for top-tier talent
          in engineering and technology. Located in the prestigious Bodoland
          Territorial (BTR) of India, we have established a solid reputation in
          both Assam and the North Eastern Region (NER). Our accomplished alumni
          are living proof of our tradition of excellence, excelling across
          diverse domains from engineering to research and development.
        </p>
        <br />
        <p style={{ textAlign: "justify", fontSize: "1rem", lineHeight: "1.6" }}>
          Since 2006, CIT Kokrajhar has been dedicated to producing diploma
          holders, graduates, and postgraduates who possess not only strong
          theoretical knowledge but also practical skills. Our students’
          unwavering commitment to innovation, problem-solving, and adaptability
          sets them apart. As the training and placement officer, my team and I
          are committed to bridging the academia-industry gap. We ensure our
          students are industry-ready through rigorous training, workshops, and
          internships, fostering holistic development.
        </p>
        <br />
        <p style={{ textAlign: "justify", fontSize: "1rem", lineHeight: "1.6" }}>
          Our students excel not only academically but also in co-curricular and
          extracurricular activities, developing leadership, teamwork, and
          communication skills essential for a thriving career. Partnering with
          us connects you to some of the finest technical minds and contributes
          to shaping the future of the engineering and technology landscape.
        </p>
        <br />
        <p style={{ textAlign: "justify", fontSize: "1rem", lineHeight: "1.6" }}>
          Thank you for considering CIT Kokrajhar as your recruitment
          destination. We eagerly anticipate a mutually beneficial partnership,
          confident that our students will elevate your organization’s growth
          and success. For inquiries or recruitment activities, please contact
          our Placement Cell.
        </p>
        <br />
        <p style={{ textAlign: "center", fontSize: "1rem", lineHeight: "1.6" }}>
          Welcome to CIT Kokrajhar, where talent meets opportunity!
        </p>
        <br />
        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
          <h2 style={{ fontWeight: "bold", fontSize: "1.5rem", textAlign: "center" }}>
            Dr. Agile Mathew
          </h2>
          <h3 style={{ fontWeight: "bold", fontSize: "1rem", textAlign: "center" }}>
            Faculty-in-Charge (T&P Cell), Central Institute Of Technology, Kokrajhar
          </h3>
        </div>
      </div>
    </main>
  );
}
