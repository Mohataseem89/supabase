import { skipToken } from '@tanstack/react-query'
import { useMemo } from 'react'

import { useIsLoggedIn, useParams } from 'common'
import { useProjectDetailQuery } from 'data/projects/project-detail-query'
import { useProjectsQuery } from 'data/projects/projects-query'

export function useSelectedProject({ enabled = true } = {}) {
  const { ref: projectRef } = useParams()
  const { data } = useProjectDetailQuery({
    variables: projectRef ? { projectRef } : skipToken,
    enabled,
  })

  return useMemo(
    () => data && { ...data, parentRef: data?.parent_project_ref ?? data?.ref },
    [data]
  )
}

export function useProjectByRef(ref?: string) {
  const isLoggedIn = useIsLoggedIn()
  const { data: projects } = useProjectsQuery({ enabled: isLoggedIn })
  return useMemo(() => {
    if (!ref) return undefined
    return projects?.find((project) => project.ref === ref)
  }, [projects, ref])
}

export const useIsOrioleDb = () => {
  const project = useSelectedProject()
  const isOrioleDb = project?.dbVersion?.endsWith('orioledb')
  return isOrioleDb
}
