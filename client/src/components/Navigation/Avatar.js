import React, { useEffect, useState } from 'react';
import "../../css/TopNavbar.css";
import apiServer from "../../service/apiServer";

const Avatar = ({ id }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    const getUser = async () => {
        const res = await apiServer.get(`/user/${id}`);
        setUser(res.data);
        setLoading(false);
    };

    useEffect(() => {
        getUser();
    }, []);

    if (loading) {
        return <div>Loading..</div>;
      }

    return (
        <div className="avatar">
            {(user.name[0]).toUpperCase()}
        </div>
    );
};

export default Avatar;