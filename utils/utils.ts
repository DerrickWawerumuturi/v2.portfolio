export const Skills = ["Javascript", "TypeScript", "React", "Next.js", "Node.js", "Supabase"];

export const websites = [
    {
        title: "PhysioMedix",
        desc: "A platform dedicated to exploring the science of physiology, offering readers in-depth insights into how the human body functions. From explaining the basics of organ systems to discussing the latest research in the field, the blog aims to make complex biological concepts",
        skills: ["Typescript", "React", "Next.js", "Node.js", "Supabase"],
        github: "https://github.com/DerrickWawerumuturi/physioMedix",
        website: "https://www.physiomedix.com/",
        cover: "/images/PhysioMedix.png"
    },
    {
        title: "CarePulse",
        desc: "A user-friendly platform that allows patients to effortlessly book appointments with their doctors, ensuring seamless and timely access to healthcare services.",
        skills: ["React", "Next.js", "Shadcn", "Vercel"],
        github: "https://github.com/DerrickWawerumuturi/carePulse",
        website: "https://care-pulse-three-ruddy.vercel.app/",
        cover: "/images/Carepulse.png"
    },
    {
        title: "Resumify",
        desc: "Resumify is an AI-powered resume builder that aims to help users create customizable and polished resumes quickly, tailored to their unique career paths.",
        skills: ["Next.js", "Tailwind", "OpenAI GPT", "Strapi"],
        github: "https://github.com/DerrickWawerumuturi/Resumify",
        website: "https://resumify-one.vercel.app/",
        cover: "/images/Resumify.png"
    }
]

export const experiences = [
    {
        category: "Education",
        items: [
            {
                university: "ALX",
                link: "https://www.alxafrica.com/",
                startDate: "May 2023",
                endDate: "November 2024",
                course: "Software Engineering",
                skills: [
                    "Gained hands-on experience with front-end and back-end technologies, including JavaScript, Python, React, and Django.",
                    "Built real-world projects, applying software engineering principles and version control with Git.",
                    "Developed strong algorithmic thinking and problem-solving skills through data structures and algorithms.",
                    "Learned about containerization with Docker, CI/CD pipelines, and cloud services for deployment.",
                ],
            },
            {
                university: "IBM",
                link: "https://www.coursera.org/professional-certificates/ai-engineer",
                startDate: "Feb 2025",
                endDate: "present",
                course: "AI Engineering",
                skills: [
                    "Learning core ML concepts like regression, classification, and clustering techniques.",
                    "Practicing with Python libraries like scikit-learn, pandas, and NumPy to build, train, and evaluate models.",
                    "Applying machine learning algorithms to solve practical problems and analyze complex datasets.",
                    "Understanding how to fine-tune models, handle overfitting, and interpret performance metrics.",
                ],
            },
        ],
    },
    {
        category: "Work",
        items: [
            {
                name: "PhysioMedix",
                role: "Developer",
                link: "https://www.physiomedix.com/",
                startDate: "September 2024",
                endDate: "present",
                skills: [
                    "Lead the development and deployment of a healthcare platform using Next.js, Payload CMS, and PostgreSQL.",
                    "Implement secure authentication and user management with Supabase and Google OAuth.",
                    "Manage dynamic content and media uploads through an integrated Supabase storage system connected to Payload CMS.",
                    "Design and maintain a responsive, modern UI with Tailwind CSS, enhancing the user experience with features like dark mode and animations.",
                ],
            },
        ],
    },
];
