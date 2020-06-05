/* 
 * Moira Alert
 *
 * This is an API description for Moira Alert project. Please check https://github.com/moira-alert
 *
 * The version of the OpenAPI document: 2.5.1.47
 * 
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */

using System;
using System.Linq;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.Serialization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System.ComponentModel.DataAnnotations;
using OpenAPIDateConverter = Org.OpenAPITools.Client.OpenAPIDateConverter;

namespace Org.OpenAPITools.Model
{
    /// <summary>
    /// NotifierState
    /// </summary>
    [DataContract]
    public partial class NotifierState :  IEquatable<NotifierState>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="NotifierState" /> class.
        /// </summary>
        /// <param name="state">value for OK state.</param>
        /// <param name="message">Detailed description of the current state. This field is non-existent if the state is OK.</param>
        public NotifierState(string state = default(string), string message = default(string))
        {
            this.State = state;
            this.Message = message;
        }
        
        /// <summary>
        /// value for OK state
        /// </summary>
        /// <value>value for OK state</value>
        [DataMember(Name="state", EmitDefaultValue=false)]
        public string State { get; set; }

        /// <summary>
        /// Detailed description of the current state. This field is non-existent if the state is OK
        /// </summary>
        /// <value>Detailed description of the current state. This field is non-existent if the state is OK</value>
        [DataMember(Name="message", EmitDefaultValue=false)]
        public string Message { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class NotifierState {\n");
            sb.Append("  State: ").Append(State).Append("\n");
            sb.Append("  Message: ").Append(Message).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }
  
        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
        {
            return JsonConvert.SerializeObject(this, Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as NotifierState);
        }

        /// <summary>
        /// Returns true if NotifierState instances are equal
        /// </summary>
        /// <param name="input">Instance of NotifierState to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(NotifierState input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.State == input.State ||
                    (this.State != null &&
                    this.State.Equals(input.State))
                ) && 
                (
                    this.Message == input.Message ||
                    (this.Message != null &&
                    this.Message.Equals(input.Message))
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = 41;
                if (this.State != null)
                    hashCode = hashCode * 59 + this.State.GetHashCode();
                if (this.Message != null)
                    hashCode = hashCode * 59 + this.Message.GetHashCode();
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> IValidatableObject.Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }

}
