import React, {useState, useEffect} from "react";
import {Octokit} from "@octokit/core";
import {Typography} from "antd";

const octokit = new Octokit({auth: `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`});

function useGithubData(username) {
    const [data, setData] = useState({});

    useEffect(() => {
        octokit.request('GET /users/{username}', {
                username: username
            }).then(function (result) {
                const response = result.data
                setData(response)
            })
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
                Имя: {githubProfileData.name}
            </Typography.Paragraph>
            <Typography.Paragraph>
                Био: {githubProfileData.bio}
            </Typography.Paragraph>
        </div>
    );
}