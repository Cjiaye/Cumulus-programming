<template>
  <div>
    <el-tabs class="demo-tabs">
      <el-tab-pane label="全部" name="first">
        <el-card>
          <el-form :model="shopLogin" style="max-width: 300px">
            <el-form-item label="关键词">
              <el-input v-model="shopLogin.name" placeholder="商品名称" />
            </el-form-item>
          </el-form>
          <div class="you">
            <el-button size="small" type="primary">搜索</el-button>
            <el-button size="small">重置</el-button>
          </div>
          <div class="button">
            <el-button size="small" type="primary">新增</el-button>
            <el-button size="small" type="danger">批量删除</el-button>
            <el-button size="small">上架</el-button>
            <el-button size="small">下架</el-button>
            <div class="sx">
              <el-icon @click="sx"><RefreshLeft /></el-icon>
            </div>
          </div>
          <br />
          <el-table :data="data" style="width: 100%">
            <el-table-column type="selection" width="55" />
            <el-table-column label="商品" width="350px">
              <template #default="scope">
                <div style="display: flex; align-items: center">
                  <img class="img" :src="scope.row.cover" />&nbsp;&nbsp;
                  <div class="price">
                    <span style="margin-left: 10px">{{ scope.row.desc }}</span>
                    <p>
                      <span style="color: red">￥{{ scope.row.min_price }}</span
                      >&nbsp;<span style="color: gainsboro">|</span>&nbsp;<span
                        >￥{{ scope.row.min_oprice }}</span
                      >
                    </p>

                    <p style="color: black">
                      <span
                        v-html="
                          scope.row.category
                            ? scope.row.category.name
                            : '未分类'
                        "
                      ></span>
                    </p>
                    <p style="color: black">
                      创建时间:{{ scope.row.create_time }}
                    </p>
                  </div>
                </div>
              </template>
            </el-table-column>
            <el-table-column property="discount" label="实际销量" />
            <el-table-column property="sale_count" label="商品状态">
              <template #default="scope">
                <el-tag
                  class="ml-2"
                  type="success"
                  v-if="scope.row.status !== 0"
                  >上架</el-tag
                >
                <el-tag class="ml-2" type="danger" v-if="scope.row.status === 0"
                  >仓库</el-tag
                >
              </template>
            </el-table-column>

            <el-table-column property="status" label="审核状态" />
            <el-table-column property="stock" label="总库存" />
            <el-table-column property="address" label="操作" width="400px">
              <template>
                <button
                  class="el-button el-button--primary el-button--small is-text px-1"
                >
                  <span>修改</span>
                </button>
                <button
                  class="el-button el-button--primary el-button--small is-text px-1"
                >
                  <span>商品规格</span>
                </button>
                <button
                  class="el-button el-button--primary el-button--small is-text px-1"
                >
                  <span>设置轮播图</span>
                </button>
                <button
                  class="el-button el-button--primary el-button--small is-text px-1"
                >
                  <span>商品详情</span>
                </button>
                <button
                  class="el-button el-button--primary el-button--small is-text px-1"
                >
                  <span>删除</span>
                </button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination background layout="prev, pager, next" :total="1000" />
        </el-card>
      </el-tab-pane>
      <el-tab-pane label="审核中" name="second">
        <el-card>
          <el-form :model="shopLogin" style="max-width: 300px">
            <el-form-item label="关键词">
              <el-input v-model="shopLogin.name" placeholder="商品名称" />
            </el-form-item>
          </el-form>
          <div class="you">
            <el-button size="small" type="primary">搜索</el-button>
            <el-button size="small">重置</el-button>
          </div>
          <div class="button">
            <el-button size="small" type="primary">新增</el-button>
            <el-button size="small" type="danger">批量删除</el-button>
            <el-button size="small">上架</el-button>
            <el-button size="small">下架</el-button>
            <div class="sx">
              <el-icon @click="sx"><RefreshLeft /></el-icon>
            </div>
          </div>
          <br />
          <el-table :data="data" style="width: 100%">
            <el-table-column type="selection" width="55" />
            <el-table-column label="商品" width="350px"> </el-table-column>
            <el-table-column label="实际销量" />
            <el-table-column label="商品状态"> </el-table-column>

            <el-table-column label="审核状态"> </el-table-column>
            <el-table-column label="总库存" />
            <el-table-column label="操作" width="400px"> </el-table-column>
          </el-table>
          <el-pagination background layout="prev, pager, next" :total="1000" />
        </el-card>
      </el-tab-pane>
      <el-tab-pane label="出售中" name="third">
        <el-card>
          <el-form :model="shopLogin" style="max-width: 300px">
            <el-form-item label="关键词">
              <el-input v-model="shopLogin.name" placeholder="商品名称" />
            </el-form-item>
          </el-form>
          <div class="you">
            <el-button size="small" type="primary">搜索</el-button>
            <el-button size="small">重置</el-button>
          </div>
          <div class="button">
            <el-button size="small" type="primary">新增</el-button>
            <el-button size="small" type="danger">批量删除</el-button>
            <el-button size="small">上架</el-button>
            <el-button size="small">下架</el-button>
            <div class="sx">
              <el-icon @click="sx"><RefreshLeft /></el-icon>
            </div>
          </div>
          <br />
          <el-table :data="data" style="width: 100%">
            <el-table-column type="selection" width="55" />
            <el-table-column label="商品" width="350px">
              <template #default="scope">
                <div style="display: flex; align-items: center">
                  <img class="img" :src="scope.row.cover" />&nbsp;&nbsp;
                  <div class="price">
                    <span style="margin-left: 10px">{{ scope.row.desc }}</span>
                    <p>
                      <span style="color: red">￥{{ scope.row.min_price }}</span
                      >&nbsp;<span style="color: gainsboro">|</span>&nbsp;<span
                        >￥{{ scope.row.min_oprice }}</span
                      >
                    </p>

                    <p style="color: black">
                      <span
                        v-html="
                          scope.row.category
                            ? scope.row.category.name
                            : '未分类'
                        "
                      ></span>
                    </p>
                    <p style="color: black">
                      创建时间:{{ scope.row.create_time }}
                    </p>
                  </div>
                </div>
              </template>
            </el-table-column>
            <el-table-column property="discount" label="实际销量" />
            <el-table-column property="sale_count" label="商品状态">
              <template #default="scope">
                <el-tag
                  class="ml-2"
                  type="success"
                  v-if="scope.row.status !== 0"
                  >上架</el-tag
                >
                <el-tag class="ml-2" type="danger" v-if="scope.row.status === 0"
                  >仓库</el-tag
                >
              </template>
            </el-table-column>

            <el-table-column property="status" label="审核状态" />
            <el-table-column property="stock" label="总库存" />
            <el-table-column property="address" label="操作" width="400px">
              <template>
                <button
                  class="el-button el-button--primary el-button--small is-text px-1"
                >
                  <span>修改</span>
                </button>
                <button
                  class="el-button el-button--primary el-button--small is-text px-1"
                >
                  <span>商品规格</span>
                </button>
                <button
                  class="el-button el-button--primary el-button--small is-text px-1"
                >
                  <span>设置轮播图</span>
                </button>
                <button
                  class="el-button el-button--primary el-button--small is-text px-1"
                >
                  <span>商品详情</span>
                </button>
                <button
                  class="el-button el-button--primary el-button--small is-text px-1"
                >
                  <span>删除</span>
                </button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination background layout="prev, pager, next" :total="1000" />
        </el-card>
      </el-tab-pane>
      <el-tab-pane label="已下架" name="fourth">
        <el-card>
          <el-form :model="shopLogin" style="max-width: 300px">
            <el-form-item label="关键词">
              <el-input v-model="shopLogin.name" placeholder="商品名称" />
            </el-form-item>
          </el-form>
          <div class="you">
            <el-button size="small" type="primary">搜索</el-button>
            <el-button size="small">重置</el-button>
          </div>
          <div class="button">
            <el-button size="small" type="primary">新增</el-button>
            <el-button size="small" type="danger">批量删除</el-button>
            <el-button size="small">上架</el-button>
            <el-button size="small">下架</el-button>
            <!-- <div class="sx">
              <el-icon @click="sx"><RefreshLeft /></el-icon>
            </div> -->
          </div>
          <br />
          <el-table :data="data" style="width: 100%">
            <el-table-column type="selection" width="55" />
            <el-table-column label="商品" width="350px">
              <template #default="scope">
                <div style="display: flex; align-items: center">
                  <img class="img" :src="scope.row.cover" />&nbsp;&nbsp;
                  <div class="price">
                    <span style="margin-left: 10px">{{ scope.row.desc }}</span>
                    <p>
                      <span style="color: red">￥{{ scope.row.min_price }}</span
                      >&nbsp;<span style="color: gainsboro">|</span>&nbsp;<span
                        >￥{{ scope.row.min_oprice }}</span
                      >
                    </p>

                    <p style="color: black">
                      <span
                        v-html="
                          scope.row.category
                            ? scope.row.category.name
                            : '未分类'
                        "
                      ></span>
                    </p>
                    <p style="color: black">
                      创建时间:{{ scope.row.create_time }}
                    </p>
                  </div>
                </div>
              </template>
            </el-table-column>
            <el-table-column property="discount" label="实际销量" />
            <el-table-column property="sale_count" label="商品状态">
              <template #default="scope">
                <el-tag
                  class="ml-2"
                  type="success"
                  v-if="scope.row.status !== 0"
                  >上架</el-tag
                >
                <el-tag class="ml-2" type="danger" v-if="scope.row.status === 0"
                  >仓库</el-tag
                >
              </template>
            </el-table-column>

            <el-table-column property="status" label="审核状态" />
            <el-table-column property="stock" label="总库存" />
            <el-table-column property="address" label="操作" width="400px">
              <template>
                <button
                  class="el-button el-button--primary el-button--small is-text px-1"
                >
                  <span>修改</span>
                </button>
                <button
                  class="el-button el-button--primary el-button--small is-text px-1"
                >
                  <span>商品规格</span>
                </button>
                <button
                  class="el-button el-button--primary el-button--small is-text px-1"
                >
                  <span>设置轮播图</span>
                </button>
                <button
                  class="el-button el-button--primary el-button--small is-text px-1"
                >
                  <span>商品详情</span>
                </button>
                <button
                  class="el-button el-button--primary el-button--small is-text px-1"
                >
                  <span>删除</span>
                </button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            background
            layout="prev, pager, next"
            :total="1000"
          /> </el-card
      ></el-tab-pane>
      <el-tab-pane label="库存预警" name="fifth">
        <el-card>
          <el-form :model="shopLogin" style="max-width: 300px">
            <el-form-item label="关键词">
              <el-input v-model="shopLogin.name" placeholder="商品名称" />
            </el-form-item>
          </el-form>
          <div class="you">
            <el-button size="small" type="primary">搜索</el-button>
            <el-button size="small">重置</el-button>
          </div>
          <div class="button">
            <el-button size="small" type="primary">新增</el-button>
            <el-button size="small" type="danger">批量删除</el-button>
            <el-button size="small">上架</el-button>
            <el-button size="small">下架</el-button>
            <!-- <div class="sx">
              <el-icon @click="sx"><RefreshLeft /></el-icon>
            </div> -->
          </div>
          <br />
          <el-table :data="tabledata" style="width: 100%">
            <el-table-column type="selection" width="55" />
            <el-table-column label="商品" width="350px"> </el-table-column>
            <el-table-column label="实际销量" />
            <el-table-column label="商品状态"> </el-table-column>

            <el-table-column label="审核状态"> </el-table-column>
            <el-table-column label="总库存" />
            <el-table-column label="操作" width="400px"> </el-table-column>
          </el-table>
          <el-pagination
            background
            layout="prev, pager, next"
            :total="1000"
          /> </el-card
      ></el-tab-pane>
      <el-tab-pane label="回收站" name="sixth">
        <el-card>
          <el-form :model="shopLogin" style="max-width: 300px">
            <el-form-item label="关键词">
              <el-input v-model="shopLogin.name" placeholder="商品名称" />
            </el-form-item>
          </el-form>
          <div class="you">
            <el-button size="small" type="primary">搜索</el-button>
            <el-button size="small">重置</el-button>
          </div>
          <div class="button">
            <el-button size="small" type="primary">新增</el-button>
            <el-button size="small" type="danger">批量删除</el-button>
            <el-button size="small">上架</el-button>
            <el-button size="small">下架</el-button>
            <div class="sx">
              <el-icon @click="sx"><RefreshLeft /></el-icon>
            </div>
          </div>
          <br />
          <el-table :data="data" style="width: 100%">
            <el-table-column type="selection" width="55" />
            <el-table-column label="商品" width="350px">
              <template #default="scope">
                <div style="display: flex; align-items: center">
                  <img class="img" :src="scope.row.cover" />&nbsp;&nbsp;
                  <div class="price">
                    <span style="margin-left: 10px">{{ scope.row.desc }}</span>
                    <p>
                      <span style="color: red">￥{{ scope.row.min_price }}</span
                      >&nbsp;<span style="color: gainsboro">|</span>&nbsp;<span
                        >￥{{ scope.row.min_oprice }}</span
                      >
                    </p>

                    <p style="color: black">
                      <span
                        v-html="
                          scope.row.category
                            ? scope.row.category.name
                            : '未分类'
                        "
                      ></span>
                    </p>
                    <p style="color: black">
                      创建时间:{{ scope.row.create_time }}
                    </p>
                  </div>
                </div>
              </template>
            </el-table-column>
            <el-table-column property="discount" label="实际销量" />
            <el-table-column property="sale_count" label="商品状态">
              <template #default="scope">
                <el-tag
                  class="ml-2"
                  type="success"
                  v-if="scope.row.status !== 0"
                  >上架</el-tag
                >
                <el-tag class="ml-2" type="danger" v-if="scope.row.status === 0"
                  >仓库</el-tag
                >
              </template>
            </el-table-column>

            <el-table-column property="status" label="审核状态" />
            <el-table-column property="stock" label="总库存" />
            <el-table-column property="address" label="操作" width="400px">
              <template> <span>暂无操作</span> </template>
            </el-table-column>
          </el-table>
          <el-pagination background layout="prev, pager, next" :total="1000" />
        </el-card>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const router = useRouter()
const store = useStore()
const data = ref([])
const shopLogin = reactive({
  name: ''
})

const getshop = async () => {
  const res = await store.dispatch('user/getshop')
  console.log(res)
  data.value = res.data.data.list
  console.log(res.data.data.list)
}
getshop()

const sx = () => {
  router.go(0)
}
</script>
<style scoped lang="scss">
.you {
  float: right;
  margin-top: -46px;
}
.img {
  width: 50px;
  height: 50px;
}
.sx {
  float: right;
}
</style>
