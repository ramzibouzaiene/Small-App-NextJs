import { useRouter } from "next/router";

const ProfileUsername = () => {
    const route = useRouter();

    const { username } = route.query;

    return <div> Hello {username}</div>
}

export default ProfileUsername;