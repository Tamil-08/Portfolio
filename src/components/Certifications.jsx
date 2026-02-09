export default function Certifications() {

    const certifications = [
        {
            name: 'Full Stack Development',
            icon: '/assets/cert.png',
            description: 'React, Java, Spring Boot, MySQL',
            link: './assets/internship.pdf',
        },
        {
            name: 'UI / UX Design',
            icon: '/assets/figma.png',
            description: 'Figma, Design Systems',
            link: './assets/Udemy Figma.pdf',
        },
        {
            name: 'TCS ION Youth Learners',
            icon: '/assets/cert2.png',
            description: 'Basic Quality & Basic Knowlege of it ',
            link: '/assets/B_KUMARAN_4008160.pdf',
        },
    ];

    return (
        <div id="certifications" className="w-full px-[12%] py-10 scroll-mt-20">

            <h2 className="text-center text-5xl font-Ovo">
                Certifications
            </h2>

            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                A collection of certifications validating my skills across frontend,
                full stack, UI/UX, and AI-driven technologies.
            </p>

            <div className="grid grid-cols-auto my-10 gap-5 dark:text-black">
                {certifications.map((item) => (
                    <div
                        key={item.name}
                        onClick={() => item.link && (window.location.href = item.link)}
                        className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
                        style={{ backgroundImage: `url(${item.icon})` }}
                    >
                        <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                            <div>
                                <h2 className="font-semibold">
                                    {item.name}
                                </h2>
                                <p className="text-sm text-gray-700">
                                    {item.description}
                                </p>
                            </div>

                            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                <img
                                    src="/assets/send-icon.png"
                                    alt="Open certificate"
                                    className="w-5"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}
