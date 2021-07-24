import { FCrud } from '@crud/index';
import request from 'umi-request';

declare namespace API {
  // 后端接口
  type ListItem = {};

  // 页面请求参数
  type PageParams = {};
}

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '描述',
    dataIndex: 'description',
    key: 'description',
  },
];

export default function IndexPage() {
  return (
    <FCrud.Table<API.ListItem, API.PageParams, string>
      request={async (params = {}) => {
        return request<{}>('/api/json/list', {
          method: 'post',
          data: params,
        });
      }}
      columns={columns}
    />
  );
}
