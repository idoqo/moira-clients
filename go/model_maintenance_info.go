/*
 * Moira Alert
 *
 * This is an API description for [Moira Alert project](https://moira.readthedocs.io/en/latest/overview.html). Please check <https://github.com/moira-alert/>
 *
 * API version: 2.5.1.48
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package openapi
// MaintenanceInfo struct for MaintenanceInfo
type MaintenanceInfo struct {
	SetupUser string `json:"setup_user,omitempty"`
	SetupTime int32 `json:"setup_time,omitempty"`
	RemoveUser string `json:"remove_user,omitempty"`
	RemoveTime int32 `json:"remove_time,omitempty"`
}
