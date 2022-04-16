import admin from 'firebase-admin'

admin.initializeApp()

// Auth

export const auth = admin.auth()

// Firestore

export const db = admin.firestore()

export { admin }
