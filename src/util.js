import simpleAssign from 'simple-assign'
import Vue from 'vue'

/**
 * Object.assign ponyfill
 */
export const assign = Object.assign || simpleAssign

export const warn = Vue.util.warn
