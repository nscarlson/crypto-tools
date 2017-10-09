import express, { Router } from 'express'

const StaticFiles = Router()

StaticFiles.use('/dist', express.static('dist'))
StaticFiles.use('/public', express.static('public'))

export default StaticFiles
