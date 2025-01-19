import CallWithNoAuthorization from "services/CallWithNoAuthorization";

export default async function RefreshToken(token: string) : Promise<string | null> {
    try {
        const response = await CallWithNoAuthorization().post(
            "auth/refresh-token",
            { refreshToken: token }
        );
        return response.data.token;
    } catch (err) {
        return null;
    }
}
