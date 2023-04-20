const AboutPage = () => {
  return (
    <>
      <h1>About Page</h1>
      <p>I am currently a FullStack Web Development Instructor for GoIT.</p>
      <p>I have experience designing and developing responsive and modern web applications for 
        small business and startups.
      </p>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
