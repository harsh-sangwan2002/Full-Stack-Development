import { useState, useEffect } from "react";
import { GetAllTheatreForAdmin, UpdateTheatre } from "../../calls/theatre";
import { message, Button, Table } from "antd";

const TheatresTable = () => {
    const [theatres, setTheatres] = useState([]);

    const getData = async () => {
        try {
            const response = await GetAllTheatreForAdmin();
            console.log(response);
            if (response.success) {
                const allTheatres = response.theatres;
                setTheatres(allTheatres);
            } else {
                message.error(response.message);
            }
        } catch (err) {
            message.error(err.message);
        }
    };

    const handleStatusChange = async (theatre) => {
        try {
            let values = {
                ...theatres,
                id: theatre._id,
                isActive: !theatre.isActive,
            };
            const response = await UpdateTheatre(values);
            if (response.success) {
                message.success(response.message);
                getData();
            }

        } catch (err) {
            message.error(err.message);
        }
    };

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Address",
            dataIndex: "address",
            key: "address",
        },
        {
            title: "Owner",
            dataIndex: "owner",
            render: (text, data) => {
                return data.owner && data.ownerDetails.name;
            },
        },
        {
            title: "Phone Number",
            dataIndex: "phone",
            key: "phone",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Status",
            dataIndex: "status",
            render: (status, data) => {
                if (data.isActive) {
                    return "Approved";
                } else {
                    return "Pending/ Blocked";
                }
            },
        },
        {
            title: "Action",
            dataIndex: "action",
            render: (text, data) => {
                return (
                    <div className="d-flex align-items-center gap-10">
                        {data.isActive ? (
                            <Button onClick={() => handleStatusChange(data)}>Block</Button>
                        ) : (
                            <Button onClick={() => handleStatusChange(data)}>Approve</Button>
                        )}
                    </div>
                );
            },
        },
    ];

    useEffect(() => {
        getData();
    }, []);

    // console.log(theatres.length > 0 && theatres);

    return (
        <>
            {theatres && theatres.length > 0 && (
                <Table dataSource={theatres} columns={columns} />
            )}
        </>
    );
};

export default TheatresTable;