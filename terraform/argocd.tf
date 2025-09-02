resource "helm_release" "argocd" {
  name = "argocd"
  chart = "argo-cd"
  repository = "https://argoproj.github.io/argo-helm"
  namespace = "argocd"
  create_namespace = true
  version = "7.7.15"
  values = ["${file("values.argocd.yaml")}"]
}