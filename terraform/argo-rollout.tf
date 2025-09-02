resource "helm_release" "argo-rollout" {
  name = "argo-rollouts"
  chart = "argo-rollouts"
  repository = "https://argoproj.github.io/argo-helm"
  namespace = "argo-rollouts"
  create_namespace = true
  version = "2.38.2"
  values = ["${file("values.argo-rollout.yaml")}"]

  depends_on = [helm_release.argocd]
}