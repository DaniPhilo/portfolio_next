const Hero = () => {
    return (
        <div className="flex flex-col justify-center items-start gap-14">
            <div>
                <p className="text-lg text-highlight-text">Hi all, I am</p>
                <h1 className="text-headline text-highlight-text">Daniel Carrasco</h1>
                <p className="text-subheadline text-secondary-purple">&gt; Full-stack Developer</p>
            </div>
            <div className="flex flex-col justify-center items-start gap-2">
                <p>// complete the game to continue</p>
                <p>// you can also see it on my Github page</p>
                <p>const githubLink = “https://github.com/example/url”</p>
            </div>
        </div>
    )
}

export default Hero