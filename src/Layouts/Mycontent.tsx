
import {Breadcrumb, Row} from 'antd';
import CustomCard from './CustomCard';
import {Content} from "antd/es/layout/layout";
//MyContent
// const description = [
//     {
//         id: 1,
//         title: "Card title 1",
//         description: "description"
//     },
//     {
//         id: 2,
//         title: "Card title 2",
//         description: "description"
//     },
//     {
//         id: 3,
//         title: "Card title 3",
//         description: "description"
//     },
//     {
//         id: 4,
//         title: "Card title 4",
//         description: "description"
//     },
//     {
//         id: 5,
//         title: "Card title 5",
//         description: "description"
//     },
//     {
//         id: 6,
//         title: "Card title 6",
//         description: "description"
//     },
// ]


function Mycontent() {
    return (
        <Content className="site-layout" style={{ padding: '0 25px', marginTop: 0 }}>
            <Breadcrumb style={{ margin: '2px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>

            </div>

        {/*<Row gutter={16} >*/}
        {/*    {*/}
        {/*        description.map((element, i) => {*/}
        {/*            return (*/}
        {/*                <CustomCard key={element.id} title={element.title} description={element.description}/>*/}
        {/*            )*/}
        {/*        })*/}
        {/*    }*/}
        {/*</Row>*/}
        </Content>
    )
}

export default Mycontent