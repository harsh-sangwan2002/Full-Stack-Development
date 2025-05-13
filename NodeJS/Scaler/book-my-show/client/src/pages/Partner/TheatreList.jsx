import { useEffect, useState } from "react";
import { Table, Button, message } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { GetAllTheatresForOwner } from "../../calls/theatre";
import TheatreFormModal from "./TheatreFormModal";
import DeleteTheatreModal from "./DeleteTheatreModal";

const TheatreList = () => {
    const { user } = useSelector((state) => state.user);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isShowModalOpen, setIsShowModalOpen] = useState(false);
    const [selectedTheatre, setSelectedTheatre] = useState(null);
    const [formType, setFormType] = useState("add");
    const [theatres, setTheatres] = useState(null);

    const getData = async () => {
        try {
            const response = await GetAllTheatresForOwner({ ownerId: user._id });
            console.log(response);
            if (response.success) {
                const allTheatres = response.theatres
                setTheatres(allTheatres);
            } else {
                message.error(response.message);
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
                    return `Approved`;
                } else {
                    return `Pending/ Blocked`;
                }
            },
        },
        {
            title: "Action",
            dataIndex: "action",
            render: (text, data) => {
                return (
                    <div className="d-flex align-items-center gap-10">
                        <Button
                            onClick={() => {
                                setIsModalOpen(true);
                                setFormType("edit");
                                setSelectedTheatre(data);
                            }}
                        >
                            <EditOutlined />
                        </Button>
                        <Button
                            onClick={() => {
                                setIsDeleteModalOpen(true);
                                setSelectedTheatre(data);
                            }}
                        >
                            <DeleteOutlined />
                        </Button>
                        {data.isActive && (
                            <Button
                                onClick={() => {
                                    setIsShowModalOpen(true);
                                    setSelectedTheatre(data);
                                }}
                            >
                                + Shows
                            </Button>
                        )}
                    </div>
                );
            },
        },
    ];

    useEffect(() => {
        if (user?._id) {
            getData();
        }
    }, [user?._id]);


    return (
        <>
            <div className="d-flex">
                <Button
                    type="primary"
                    onClick={() => {
                        setIsModalOpen(true);
                        setFormType("add");
                    }}
                >
                    Add Theatre
                </Button>
            </div>
            <Table dataSource={theatres} columns={columns} />
            {
                isModalOpen && (
                    <TheatreFormModal
                        isModalOpen={isModalOpen}
                        selectedTheatre={selectedTheatre}
                        setSelectedTheatre={setSelectedTheatre}
                        setIsModalOpen={setIsModalOpen}
                        formType={formType}
                        getData={getData}
                    />
                )
            }
            {
                isDeleteModalOpen &&
                (
                    <DeleteTheatreModal
                        isDeleteModalOpen={isDeleteModalOpen}
                        selectedTheatre={selectedTheatre}
                        setIsDeleteModalOpen={setIsDeleteModalOpen}
                        setSelectedTheatre={setSelectedTheatre}
                        getData={getData}
                    />
                )
            }
        </>
    );
};

export default TheatreList;