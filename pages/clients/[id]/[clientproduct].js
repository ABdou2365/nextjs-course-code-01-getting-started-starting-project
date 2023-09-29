import { useRouter } from "next/router";

function SelectedClientProjectPage() {
    const router = useRouter()
    console.log(router.query);
    return (
        <div>
            <h1>The selected client project page</h1>
        </div>
    )
}

export default SelectedClientProjectPage;