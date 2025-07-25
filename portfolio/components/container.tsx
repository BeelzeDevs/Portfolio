
interface ContainerProps {
    children: React.ReactNode
}

const ContainerPage = (props: ContainerProps) =>{
    const {children } = props;


    return(
        <div className="w-full px-4 pb-40 
        mx-auto pt-40 md:pb-10 md:px-6">
            {children}
        </div>
    )
}

export default ContainerPage;