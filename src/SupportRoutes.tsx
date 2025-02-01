/* 
import { Route } from "react-router-dom"
import "./App.css" //remove if not needed
import React from "react"

const Jobs = React.lazy(() => import("./features/jobs"))
const Posts = React.lazy(() => import("./features/jobs/Content/posts"))
const Close = React.lazy(() => import("./features/jobs/Content/posts/Close"))
const DrawerLayout = React.lazy(() => import("./features/jobs/Drawer"))
const Manage = React.lazy(() => import("./features/manage"))
const HeaderUser = React.lazy(() => import("./features/manage/contents/HeaderUser"))
const Reports = React.lazy(() => import("./features/manage/contents/reports"))
const Translation = React.lazy(() => import("./features/translation"))
const TranslateNav = React.lazy(() => import("./features/translation/nav"))
const PageSelect = React.lazy(() => import("./features/translation/page/PageSelect"))
const PageTableView = React.lazy(() => import("./features/translation/page/PageTableView"))
const TypeNav = React.lazy(() => import("./features/translation/type/TypeNav"))
const TypeSelect = React.lazy(() => import("./features/translation/type/TypeSelect"))
const TypeLive = React.lazy(() => import("./features/translation/type/live"))
const TypeSuggestions = React.lazy(() => import("./features/translation/type/suggestions"))
const Types = React.lazy(() => import("./features/manage/contents/types/Types"))
const Insurance = React.lazy(() => import("./features/manage/contents/insurance/Insurance"))
const DrawerInsurance = React.lazy(() => import("./features/manage/contents/insurance/DrawerInsurance"))
const JobSkills = React.lazy(() => import("./features/manage/contents/types/content/JobSkills"))
const Expertise = React.lazy(() => import("./features/manage/contents/types/content/Expertise"))

import { useAppSelector } from "./app/hooks"
import { selectCommon } from "./features/common/slice"
import AppRoutes from "./AppRoutes"

const SupportRoute = () => {
  const common = useAppSelector(selectCommon)
  const support = common.support
  const user = common.user
  const isHire = !!user.profile?.hire
  const app_routes = AppRoutes(!!support, isHire)
  return [
    <Route path="/" element={<></>} />,
    <Route path="monetize" element={<Jobs />}>
      <Route path="posts" element={<Posts />}>
        <Route path=":postId" element={<DrawerLayout />}>
          <Route path="close" element={<Close />} />
        </Route>
      </Route>
    </Route>,
    <Route path="translation" element={<Translation />}>
      <Route path=":translateId" element={<TranslateNav />}>
        <Route path="type" element={<TypeSelect />}>
          <Route path=":typeId" element={<TypeNav />}>
            <Route path="live" element={<TypeLive />} />
            <Route path="suggestions" element={<TypeSuggestions />} />
          </Route>
        </Route>
        <Route path="page" element={<PageSelect />}>
          <Route path=":pageId" element={<PageTableView />} />
        </Route>
      </Route>
    </Route>,
    <Route path="manage" element={<Manage />}>
      <Route path=":userId" element={<HeaderUser />}>
        {app_routes}
      </Route>
    </Route>,
    <Route path="reports" element={<Reports />}>
      <Route path=":postId" element={<DrawerLayout />} />
    </Route>,
    <Route path="types" element={<Types />}>
      <Route path="skills" element={<JobSkills />} />
      <Route path="expertise" element={<Expertise />} />
    </Route>,
    <Route key={"insurance"} path="insurance" element={<Insurance />}>
      <Route path=":userId" element={<DrawerInsurance />} />
    </Route>,
  ]
}

export default SupportRoute


*/
