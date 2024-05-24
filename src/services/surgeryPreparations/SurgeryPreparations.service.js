import * as API from "@/services/API"

export default {
    getEvents() {
        return API.apiClient.get('/preparations/all')
    }
}