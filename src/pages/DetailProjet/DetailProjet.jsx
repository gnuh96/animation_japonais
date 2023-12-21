import './DetailProjet.css'
import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import firebase from 'firebase/app'
import {collection, doc, getDoc} from 'firebase/firestore'

import 'firebase/firestore'

import {db} from '../../services/db.services'

function DetailProjet(props) {
  // recuperer id depuis l'url
  const {id} = useParams()
  // data
  const [projectData, setProjectData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectDocRef = doc(db, 'projet', id)
        const projectDoc = await getDoc(projectDocRef)

        if (projectDoc.exists()) {
          console.log('Document found !', projectDoc.data())
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

  return <div>Detail Projet - {id}</div>
}

export default DetailProjet
