import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import firebase from 'firebase/app'
import {collection, doc, getDoc} from 'firebase/firestore'

import 'firebase/firestore'

import {db} from '../../services/db.services'
import InputSearch from '../../components/inputSearch/InputSearch'
import {DetailRightPane} from '../../components/DetailRightPane/DetailRightPane'

import s from './style.module.css'
import {DisplayInteractiveImage} from '../../components/DisplayInteractiveImage/DisplayInteractiveImage'

function DetailProjet(props) {
  // recuperer id depuis l'url
  const {id} = useParams()
  // data
  const [projectData, setProjectData] = useState(null)

  // search
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectDocRef = doc(db, 'projet', id)
        const projectDoc = await getDoc(projectDocRef)

        if (projectDoc.exists()) {
          //console.log('Document found !', projectDoc.data())
          setProjectData(projectDoc.data())
        } else {
          console.log('Document not found')
        }
      } catch (error) {
        console.error('Error fetching document:', error)
      }
    }

    fetchData()
  }, [id])

  //
  const [currentState, setcurrentState] = useState('STUDY')

  // images

  function updateState(state) {
    setcurrentState(state)
  }

  function getImageSrc() {
    if (currentState === 'STUDY') {
      return projectData?.thumbnail
    } else if (currentState === 'GENGA') {
      return projectData?.genga
    } else if (currentState === 'FINAL') {
      return projectData?.final
    }
    return null
  }

  return (
    <div className={s.container}>
      {
        //Detail Projet - {id}
        /**
               <InputSearch
        initialList={null}
        placeholder='Recherche'
        searchKey='title'
        searchValue={null}
        setSearchValue={() => {}}
        setResults={null}
      />
         */
      }
      <div>
        <h1>{projectData?.title}</h1>
        <h2>Par : {projectData?.userMail}</h2>
      </div>

      <DisplayInteractiveImage imageSrc={getImageSrc()} />
      <div className={s.rightPane}>
        <DetailRightPane onItemClick={updateState} state={currentState} />
      </div>
    </div>
  )
}

export default DetailProjet
