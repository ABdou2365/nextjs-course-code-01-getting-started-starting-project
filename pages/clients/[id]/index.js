import { useRouter } from "next/router";

function ClientProjectsPage() {
    const router = useRouter();

    function loadProjectHandler() {
        router.push({
            pathname: '/clients/[id]/[clientproduct]',
        query : {id : "max" , clientproduct : "project A"}});
    }
    console.log(router.query);
    return (
        
        <div>
            <h1>The client projects page</h1>
            <button onClick={loadProjectHandler}>Load project A</button>
        </div>
    )
}

export default ClientProjectsPage;