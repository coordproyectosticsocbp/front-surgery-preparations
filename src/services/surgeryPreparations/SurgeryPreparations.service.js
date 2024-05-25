import * as API from "@/services/API"

export default {
    getEvents() {
        return API.apiClient.get('/preparations/all')
    },
    removeQuota(id) {
        return API.apiClient.patch(`/preparations/releaseQuota/${id}`)
    }
}