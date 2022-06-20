import React, {useState} from 'react'
import Pager from "./Pager"

export default function PagerTest(props) {
    const changes = handlePageChange
    const [visible, setVisible] = useState(false);
    const [form, setFormData] = useState({});

    const [modalState, setModalState] = useState({
        visible: false,
        formData: {}
    })

    return (
        <div>
            <Pager visible={modalState.visible} onClick={() => {
                setVisible(true);
                setTimeout(() => {
                    setFormData({
                        ...Pager
                    })
                }, 0)
                //  setModalState({
                //     visible:true,
                //     formData:{
                //       name:'xiaoming'
                //     }
                //   })
            }} current={3} total={100} limit={10} panelNumber={5} span={<span>jjjjj</span>} onPageChange={changes}/>
        </div>
    )

}

function handlePageChange(newpage) { //newpage 表示传递过来的页码
    console.log(this)
    this.setState({
        current: newpage
    })
}

