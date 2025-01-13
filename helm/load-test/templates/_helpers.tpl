{{/*
Expand the name of the chart.
*/}}
{{- define "load-test.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" }}
{{- end }}


{{- define "load-test.namespace" -}}
{{- default .Values.namespace .Release.Namespace  | trimSuffix "-" }}
{{- end }}


{{- define "load-test.statsd" -}}
{{- printf "%s:%s" .Values.statsd.host (.Values.statsd.port | toString) | quote }}
{{- end }}
