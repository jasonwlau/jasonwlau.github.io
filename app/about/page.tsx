import Header from '../components/header';

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <div>
        <Header />
        <p>
          Hi! I&apos;m a software engineer based in the Bay Area. I am passionate
          across many fields of software engineering from systems programming to
          full-stack development. I love to explore the different fields of
          computer science primarily distributed systems, networking, and
          machine learning as well as pick up new programming languages. My goal with
          programming is to create solutions that ultimately benefit users and help
          make the world better if even just a little bit.
        </p>
        <br />
        <p>
          I have worked extensively in Java and Python and many of their popular
          libraries including Spring, Flask, Numpy, pandas, and sklearn. In
          addition, I have a wealth of experience working in HTML, CSS, and
          Javascript/Typescript, where I am deeply familiar with libraries like
          React, Next.js, Redux, and Tailwind CSS. Some other languages I have used are
          C/C++ and Rust. I can also use SQL databases like Postgres
          and NoSQL databases like DynamoDB, and I am comfortable with many DevOps tools such
          as Docker, GitHub Actions, and AWS CDK.
        </p>
        <br />
        <p>
          Feel free to reach out to me at
          {' '}
          <a
            href="mailto: jaswlau@gmail.com"
            className="font-bold"
          >
            jaswlau@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
