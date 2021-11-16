import React from "react";
import moment from 'moment';
import { Form, Input, Button, DatePicker, Alert, Typography} from 'antd';

export class MainPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            date: Date,
            exposed: false,
        };
    }


    onFinish = (values) => {
        this.setState({
            name: values.name
        })
        console.log(this.state)
        this.setState({
            exposed: true
        });
    };

    onChange = (value, dateString) => {
        this.setState({date: dateString})
    }

    disabledDate(current) {
        return current < moment().startOf('day');
    }

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    render() {
        let min = moment().minute()
        let nowTime = moment().add(min > 30 && 1 , 'hours').minutes(min <= 30 ? 30 : 0).format("hh:mm a")
        return (
            <div>
                <Typography.Title>
                    Записаться на стирку
                </Typography.Title>

                <Typography.Paragraph>
                    Здравствуйте! Здесь вы можете забронировать стиральную машину на 30 минут, начиная с выбранного с форме ниже времени
                </Typography.Paragraph>
                <div className="form-container">
                    <Form
                        className="basic"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Имя"
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Пожалуйста, введите имя!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Дата и время"
                            name="date"
                            rules={[
                                {
                                    required: true,
                                    message: 'Пожалуйста, выберите дату и время!',
                                },
                            ]}
                        >
                            <DatePicker
                                format="YYYY-MM-DD HH:mm"
                                disabledDate={this.disabledDate}
                                onChange={this.onChange}
                                showTime={{ defaultValue: moment(nowTime, 'HH:mm'), minuteStep: 30}}
                            />
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                        { this.state.exposed &&
                            <Form.Item>
                                <Alert message={'Вы успешно записались на ' + this.state.date} type="success" />
                            </Form.Item>
                        }
                    </Form>
                </div>
            </div>
        );
    }
}
