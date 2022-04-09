
import {Breadcrumb, Row,List} from 'antd';
import {CustomCard} from './CustomCard';
import {Content} from "antd/es/layout/layout";
import {useRootStore} from "../index";
import {IContentModel} from "../interface/Interfaces";
import {NodeCollapseOutlined} from "@ant-design/icons";
import {NoteValue} from "../Notes/NoteValue";



export  const  Mycontent = () => {
  const {contents,content_notes_array} = useRootStore()
    // console.log(">>root_store",contents)
    return (

            <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                <Row gutter={16} >
                    {contents.map((content:IContentModel) => {
                        return (
                            <CustomCard key={content.id} content={content}/>
                        )
                    } )}

                </Row>
                <div>
<List
                        itemLayout="horizontal"
                        dataSource={content_notes_array}
                        renderItem={(content:any)=> (
                            <List.Item>
                              <NoteValue content={content}/>
                            </List.Item>
                        ) }
                    />
                </div>
            </div>






    )
}

