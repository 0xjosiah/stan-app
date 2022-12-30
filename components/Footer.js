export default function Footer() {
    const linkToPortfolio = "https://0xjosiah.xyz"

    return (
        <div className="flex justify-center items-center flex-col p-24 absolute bottom-0 right-0">
            <a
                href={linkToPortfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center gap-2"
            >
                By{' '}
                <p className="m-0 p-4 bg-[238, 240, 241, .5] border-2 rounded-lg border-slate-500 font-mono"
                >0xjosiah</p>
            </a>
        </div>
    )
}