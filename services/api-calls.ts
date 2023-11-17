import { Octokit } from "octokit"

export const getGists = async () => {    
    const octokit = new Octokit({
        auth: process.env.NEXT_PUBLIC_GH_TOKEN
    });

    const response = await octokit.request('GET /gists', {
        headers: {
            'X-GitHub-Api-Version': '2022-11-28',
            'If-None-Match': ''
        }
    });

    const gists = await Promise.all(
        response.data.map(gist => octokit.request(`GET /gists/${gist.id}`))
    );

    return gists
}