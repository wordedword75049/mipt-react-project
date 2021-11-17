import React, {useState, useEffect} from "react";
import {Octokit} from "@octokit/core";
import {Typography} from "antd";

const octokit = new Octokit({auth: `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`});

function useGithubData(username) {
    const [data, setData] = useState({data: {}});

    useEffect(() => {
        const getData = async () => {
            const response = await octokit.request('GET /users/{username}', {
                username: username
            });
            setData(response)
        };
        getData();
    }, [username]);

    return data;
}


export function PageAbout() {
    const githubProfileData = useGithubData('wordedword75049');
    return (
        <div>
            <Typography.Title>
                О разработчике:
            </Typography.Title>
            <Typography.Paragraph>
                Имя: {githubProfileData.data.name}
            </Typography.Paragraph>
            <Typography.Paragraph>
                Био: {githubProfileData.data.bio}
            </Typography.Paragraph>
        </div>
    );
}