import axios from 'axios'
import request from '@/utils/request'
const BASE_URL = '/api'

//字典信息域查询
export const dict_search_domain = (domain) => {
    return request.get(`${BASE_URL}/admin/common/findByDomain/` + domain)
};


