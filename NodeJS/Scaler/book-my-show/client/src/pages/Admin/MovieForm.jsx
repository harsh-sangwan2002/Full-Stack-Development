import { Button, Col, Form, Input, message, Modal, Row, Select } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useDispatch } from 'react-redux'
import { hideLoading, showLoading } from '../../redux/loaderSlice';
import { AddMovie, UpdateMovie } from '../../calls/movie';
import moment from 'moment';

const MovieForm = ({ isModalOpen, setIsModalOpen, selectedMovie, setSelectedMovie, formType, getData }) => {

    const dispatch = useDispatch();

    if (selectedMovie) {
        selectedMovie.releaseDate = moment(selectedMovie.releaseDate).format("YYYY-MM-DD");
    }

    const onFinish = async (values) => {
        try {
            dispatch(showLoading());
            let res = null;

            if (formType === "add") {
                res = await AddMovie(values);
            } else {
                res = await UpdateMovie({ ...values, id: selectedMovie._id });
            }

            if (res.success) {
                message.success(res.message);
                getData();
            }

            else {
                message.error(res.message);
            }

            setIsModalOpen(false);
            setSelectedMovie(null);
            dispatch(hideLoading());
        } catch (err) {
            dispatch(hideLoading());
            message.error(err.message);
        }
    }

    const handleCancel = () => {
        setIsModalOpen(false);
        setSelectedMovie(null);
    }

    return (
        <Modal
            centered
            title={formType === "add" ? "Add Movie" : "Edit Movie"}
            open={isModalOpen}
            onCancel={handleCancel}
            width={800}
            footer={null}
        >
            <Form layout='vertical' initialValues={selectedMovie} onFinish={onFinish}>
                <Row gutter={{ xs: 6, sm: 10, md: 12, lg: 16 }}>
                    <Col span={24}>
                        <Form.Item label="Movie Name" name="movieName" rules={[{ required: true, message: 'Movie name is required' }]} >
                            <Input placeholder='Enter movie name' />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item label="Description" name="description" rules={[{ required: true, message: 'Description is required' }]} >
                            <TextArea rows="4" placeholder='Enter the description' />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Row gutter={{ xs: 6, sm: 10, md: 12, lg: 16 }}>
                            <Col span={12}>
                                <Form.Item label="Duration" name="duration" rules={[{ required: true, message: 'Movie duration is required' }]} >
                                    <Input placeholder='Enter movie duration' />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label="Select movie language" name="language" rules={[{ required: true, message: 'Movie language is required' }]} >
                                    <Select
                                        placeholder="Select Language"
                                        options={
                                            [
                                                { value: 'Hindi', label: 'Hindi' },
                                                { value: 'English', label: 'English' },
                                                { value: 'Tamil', label: 'Tamil' },
                                                { value: 'Telugu', label: 'Telugu' },
                                                { value: 'Kannada', label: 'Kannada' },
                                                { value: 'Malayalam', label: 'Malayalam' },
                                            ]
                                        }
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Form.Item label="Release date" name="releaseDate" rules={[{ required: true, message: 'Release date is required' }]} >
                                    <Input type="date" />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={24}>
                        <Row gutter={{ xs: 6, sm: 10, md: 12, lg: 16 }}>
                            <Col span={8}>
                                <Form.Item label="Select movie genre" name="genre" rules={[{ required: true, message: 'Movie genre is required' }]} >
                                    <Select
                                        placeholder="Select Genre"
                                        options={
                                            [
                                                { value: 'Action', label: 'Action' },
                                                { value: 'Comedy', label: 'Comedy' },
                                                { value: 'Drama', label: 'Drama' },
                                                { value: 'Horror', label: 'Horror' },
                                                { value: 'Romance', label: 'Romance' },
                                                { value: 'Sci-Fi', label: 'Sci-Fi' },
                                            ]
                                        }
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={16}>
                                <Form.Item label="Poster URL" name="poster" rules={[{ required: true, message: 'Movie poster is required' }]} >
                                    <Input placeholder="Enter the poster URL" />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Form.Item>
                    <Button block type='primary' htmlType='submit' style={{ fontSize: '1rem', fontWeight: '600' }}>
                        Submit the data
                    </Button>
                    <Button className='mt-3' block onClick={handleCancel}>
                        Cancel
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default MovieForm
