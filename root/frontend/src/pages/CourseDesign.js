import React, {useState, useEffect} from 'react'
import Button from '../components/Button'
import Header from '../components/Header'
import TextInput from '../components/TextInput'
import axios from 'axios'

export default function CourseDesign() {
  const[course, setCourse] = useState({courseName: 'New Course', sections: [{
    lessons: [{
        name: '',
        video_url: '',
        tests: [{
            questions: [{
                question: '',
                answers: [{
                    answer: '',
                    isCorrect: false
                }]
            }]
        }]
    }]
    }]})

  const addCourse = async() =>{
    await axios.post(`${process.env.REACT_APP_API_ADDRESS}/api/courses/add-course`, course, {headers: {'authorization': `Bearer ${localStorage.getItem("token")}`}}).then(res =>{
        console.log(res.data)
    })
  }

  return (
    <div>
        <Header/>
        <div className='page-container'>
            <TextInput placeholder='Lesson Name'/>
            <Button className='round-button-menu' text="Add Course" onClick={addCourse}/>
        </div>
    </div>
  )
}
