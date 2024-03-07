const BannerFooter = ()=>{
    return (
        <>
            <section className="main-banner_footer">

            </section>
            <style jsx>{`
            .main-banner_footer{
                max-width: 100%;
                background-color: #EB9BFF38;
                height: 100vh;
                z-index: -1;
            }
            @media (max-width: 900px){
                .main-banner_footer{
                    height: 50vh;
                }
            }
            @media (max-width: 600px){
                .main-banner_footer{
                    height: 30vh;
                }

            }
            `}</style>
        </>
    )
}

export default BannerFooter;