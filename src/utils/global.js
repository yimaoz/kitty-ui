/**
 * 全局常量、方法封装模块
 * 通过原型挂载到Vue属性
 * 通过 this.Global 调用
 */

// 后台管理系统服务器地址
export const baseUrl = 'http://192.168.200.87:8001'
// 系统数据备份还原服务器地址
export const backupBaseUrl = 'http://192.168.200.87:8002'

export default {
    baseUrl,
    backupBaseUrl
}
